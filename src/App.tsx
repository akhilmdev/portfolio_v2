import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  useThemeContext,
} from "./components/ThemeProvider/themeProvider";
import Button from "@mui/material/Button";
import { Themes } from "./config/themeConfig";
import { useTheme } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainContent />
    </ThemeProvider>
  );
}

const MainContent: React.FC = () => {
  const { setTheme } = useThemeContext();
  const MUITheme = useTheme();

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello, MUI with Multiple Themes!</h1>
      {Themes.map((theme) => (
        <Button
          key={theme}
          variant="contained"
          onClick={() => setTheme(theme)}
          style={{ margin: 5, color: MUITheme.palette.primary.main }}
        >
          Switch to {theme}
        </Button>
      ))}
    </div>
  );
};

export default App;
