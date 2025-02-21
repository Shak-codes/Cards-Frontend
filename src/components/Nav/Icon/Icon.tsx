import React from 'react';
import './styles.scss';
import {
  HomeOutlined as HomeOutline,
  EmojiEventsOutlined as LeaderboardsOutline,
  TimelineOutlined as HistoryOutline,
  PeopleOutlined as FriendsOutline,
  AnalyticsOutlined as StatsOutline,
  SettingsOutlined as SettingsOutline,
  LogoutOutlined as LogoutOutline,
  Home as Home,
  EmojiEvents as Leaderboards,
  Timeline as History,
  People as Friends,
  Analytics as Stats,
  Settings as Settings,
  Logout as Logout,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";


type IconProps = {
  variant: "Home" | "Leaderboards" | "History" | "Friends" | "Stats" | "Settings" | "Logout";
  onClick?: () => Promise<void> | void;
};

const Icon: React.FC<IconProps> = ({ variant, onClick }) => {
  const location = useLocation();

  const currentPath = location.pathname.toLowerCase();

  const routeMap: Record<IconProps["variant"], string> = {
    Home: "/home",
    Leaderboards: "/leaderboards",
    History: "/history",
    Friends: "/friends",
    Stats: "/stats",
    Settings: "/settings",
    Logout: "/logout",
  };

  const isActive = currentPath === routeMap[variant];

  const outlineMap = {
    Home: HomeOutline,
    Leaderboards: LeaderboardsOutline,
    History: HistoryOutline,
    Friends: FriendsOutline,
    Stats: StatsOutline,
    Settings: SettingsOutline,
    Logout: LogoutOutline,
  };

  const fillMap = {
    Home: Home,
    Leaderboards: Leaderboards,
    History: History,
    Friends: Friends,
    Stats: Stats,
    Settings: Settings,
    Logout: Logout,
  };

  const IconOutline = outlineMap[variant];
  const IconFill = fillMap[variant];

  return (
    <>
      {/* Icon Wrapper (Keeps both icons stacked) */}
      <div className="IconFlexWrapper">
        <div className="IconStack" onClick={onClick}>
          {/* Outlined Icon (Default) */}
          <IconOutline
            sx={{
              fontSize: "28px",
              color: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "opacity 0.7s",
              opacity: isActive ? 0 : 1,
              "&:hover": { opacity: 0 },
            }}
          />

          {/* Filled Icon (Appears on Hover) */}
          <IconFill
            sx={{
              fontSize: "28px",
              color: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "opacity 0.3s",
              opacity: isActive ? 1 : 0,
              "&:hover": { opacity: 1 },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Icon;