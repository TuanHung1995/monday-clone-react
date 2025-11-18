import Portal from "@utils/Portal";
import Box from "@mui/material/Box";

import TeamMenu from "../Team/TeamMenu";
import AccountMenu from "../Account/AccountMenu";
import ExploreMenu from "../Explore/ExploreMenu";
import WorkStatus from "../WorkStatus/WorkStatus";

const Dropdown = ({ref}: {ref: React.Ref<HTMLDivElement>}) => {
    return (
        <Portal>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
            style={{ zIndex: 99999 }}
          >
            <Box
              ref={ref}
              sx={{
                position: "absolute",
                right: 20,
                top: 60,
                width: 380,
                backgroundColor: "#1e2238",
                color: "white",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid #3a3e55",
                padding: "1rem",
              }}
              style={{ zIndex: 999999 }}
            >
              {/* Team name */}
              <TeamMenu />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                  marginTop: "1rem",
                }}
              >
                {/* LEFT - ACCOUNT */}
                <AccountMenu />

                {/* RIGHT - EXPLORE */}
                <ExploreMenu />
              </Box>

              {/* Working Status */}
              <WorkStatus />
            </Box>
          </Box>
        </Portal>
    )
}

export default Dropdown;
