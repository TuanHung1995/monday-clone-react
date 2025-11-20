import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@components/common/Button/MenuItem";
import Grid from "@mui/material/Grid";
import { MailOutline, PhoneIphone, LocationOn } from "@mui/icons-material";
import { Sparkles, Users, Settings } from "lucide-react";

// dùng ảnh bạn upload (hệ thống sẽ chuyển sang URL khi cần)
const illustration = "/mnt/data/b9b47d77-9a4b-4f96-ac2b-46421ad7a1ab.png";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ProfileModal: React.FC<Props> = ({ open, onClose }) => {
  // mock user data — thay bằng store hoặc props thật khi tích hợp
  const user = {
    name: "Tuan Hung",
    title: "Admin",
    email: "tuanhung1995.aff@gmail.com",
    phone: "",
    mobile: "",
    location: "",
    avatarInitial: "T",
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          bgcolor: "#0f1724", // dark background
          color: "white",
          borderRadius: 2,
          p: 0,
          minHeight: "70vh",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Header with Close X */}
        <Box sx={{ position: "relative", pb: 1 }}>
          <Box sx={{ px: 4, py: 2 }}>
            <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>
              Profile
            </Typography>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8, color: "white" }}
            aria-label="Close profile"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#2b2f48" }} />

        <Grid container>
          {/* LEFT NAV */}
          <Grid size={{xs: 12, md: 3}}>
            <Box sx={{ bgcolor: "#23263a", height: "100%", minHeight: "60vh", p: 3 }}>
              <List component="nav" sx={{ p: 0 }}>
                <MenuItem icon={<Users size={18} />} label="Personal info" />
                <MenuItem icon={<Sparkles size={18} />} label="Working status" />
                <MenuItem icon={<Settings size={18} />} label="Notifications" />
                <MenuItem icon={<Settings size={18} />} label="Language & region" />
                <MenuItem icon={<Settings size={18} />} label="Password" />
                <MenuItem icon={<Settings size={18} />} label="Session history" />
              </List>
            </Box>
          </Grid>

          {/* CENTER + RIGHT */}
          <Grid size={{xs: 12, md: 9}}>
            <Box sx={{ p: 4 }}>
              {/* Top big card */}
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  bgcolor: "#111426",
                  borderRadius: 2,
                  p: 4,
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <Avatar sx={{ width: 110, height: 110, bgcolor: "#5b5fff", fontSize: 48 }}>
                  {user.avatarInitial}
                </Avatar>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mt: 0.5 }}>
                    Add a job title
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Button variant="contained" size="small" sx={{ bgcolor: "#2b5bd6", textTransform: "none" }}>
                      {user.title}
                    </Button>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      Your work schedules:
                    </Typography>
                    <Button variant="outlined" size="small" sx={{ mt: 1, color: "white", borderColor: "rgba(255,255,255,0.06)" }}>
                      Account schedule
                    </Button>
                  </Box>
                </Box>

                {/* Right column of top card */}
                <Box sx={{ minWidth: 220 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <InfoRow icon={<MailOutline />} label="Email" value={user.email} />
                    <InfoRow icon={<PhoneIphone />} label="Phone" value={user.phone || "Add a phone"} />
                    <InfoRow icon={<PhoneIphone />} label="Mobile phone" value={user.mobile || "Add a mobile phone"} />
                    <InfoRow icon={<LocationOn />} label="Location" value={user.location || "Add a location"} />
                  </Box>
                </Box>
              </Box>

              {/* Lower 2 columns */}
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mt: 3 }}>
                <Box sx={{ bgcolor: "#0f1726", borderRadius: 2, p: 3, border: "1px solid rgba(255,255,255,0.04)" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Birthday
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
                    Add a birthday
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Work anniversary
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
                      Add a work anniversary
                    </Typography>
                  </Box>
                </Box>

                {/* Illustration card */}
                <Box sx={{ bgcolor: "#0f1726", borderRadius: 2, p: 3, border: "1px solid rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Box>
                    <img src={illustration} alt="illustration" style={{ width: "100%", borderRadius: 8, objectFit: "cover" }} />
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Create and join teams
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
                      Collaborate better with teammates and keep track of projects you're interested in
                    </Typography>
                    <Button variant="outlined" sx={{ mt: 2, color: "white", borderColor: "rgba(255,255,255,0.06)" }}>
                      Explore teams
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;

/* ---------------- helper components ---------------- */

// const MenuItem: React.FC<{ icon?: React.ReactNode; text: string; active?: boolean }> = ({ icon, text, active }) => {
//   return (
//     <ListItem button sx={{ py: 1.25, px: 0, borderRadius: 1, bgcolor: active ? "rgba(60,130,255,0.12)" : "transparent", mb: 0.5 }}>
//       <ListItemIcon sx={{ color: active ? "#3d7bff" : "rgba(255,255,255,0.65)" }}>{icon}</ListItemIcon>
//       <ListItemText primary={<Typography sx={{ color: active ? "#3d7bff" : "rgba(255,255,255,0.8)", fontSize: 14 }}>{text}</Typography>} />
//     </ListItem>
//   );
// };

const InfoRow: React.FC<{ icon?: React.ReactNode; label: string; value?: string }> = ({ icon, label, value }) => {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
      <Box sx={{ color: "rgba(255,255,255,0.6)" }}>{icon}</Box>
      <Box>
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", display: "block" }}>{label}</Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>{value}</Typography>
      </Box>
    </Box>
  );
};
