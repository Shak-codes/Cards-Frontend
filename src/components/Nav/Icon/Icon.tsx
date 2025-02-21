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


type IconProps = {
  variant: "Home" | "Leaderboards" | "History" | "Friends" | "Stats" | "Settings" | "Logout";
};

const Icon: React.FC<IconProps> = ({ variant }) => {
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
        <div className="IconStack">
          {/* Outlined Icon (Default) */}
          <IconOutline
            sx={{
              fontSize: "28px",
              color: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "opacity 0.7s",
              opacity: 1,
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
              opacity: 0,
              "&:hover": { opacity: 1 },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Icon;