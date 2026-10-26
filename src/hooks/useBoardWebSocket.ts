import { useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WS_URL = import.meta.env.VITE_WS_URL || "http://localhost:1122/ws";

export const useBoardWebSocket = (boardId: string | undefined, onUpdate: () => void) => {
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    if (!boardId) return;

    // Create STOMP client
    const client = new Client({
      // We use webSocketFactory because the Spring Boot backend uses SockJS
      webSocketFactory: () => new SockJS(WS_URL),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log(`Connected to STOMP WebSocket for board: ${boardId}`);
        // Subscribe to the board's topic
        client.subscribe(`/topic/board/${boardId}`, (message) => {
          try {
            const payload = JSON.parse(message.body);
            console.log("WebSocket event received:", payload);
            
            // Trigger the callback to refetch board data
            if (payload && payload.type) {
               onUpdate();
            }
          } catch (error) {
            console.error("Failed to parse WebSocket message", error);
          }
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
      onWebSocketError: (event) => {
        console.error('WebSocket Error', event);
      }
    });

    client.activate();
    clientRef.current = client;

    // Cleanup on unmount or when boardId changes
    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
        console.log(`Disconnected from STOMP WebSocket for board: ${boardId}`);
      }
    };
  }, [boardId, onUpdate]);
};
