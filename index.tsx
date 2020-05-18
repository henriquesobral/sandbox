import React from "react";
import ReactDOM from "react-dom";

import { BaseProvider, styled } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { LightTheme, DarkTheme } from "./themes";

import SelectComponent from "./Components/Select-component";
import ToolTip from "./Components/Tool_tip";
import Button from "./Components/Button_arrow";
import FileUploader from "./Components/File_Uploader";
import NumberedSteps from "./Components/Numbered_steps";
import ProgressBar from "./Components/Progress_Bar";
import ButtonValidacaoImagens from "./Components/Button_ValidacaoDataset";
import Radio from "./Components/Radio";
import SistemaCoordenadas from "./Components/SistemaCoordenadas";
import ButtonValidacaoGCPs from "./Components/Button_ValidarGCPs";
import NomeProcessamento from "./Components/Nome_Processamento";
import DataProcessamento from "./Components/DataProcessamento";
import ToggleProcessamento from "./Components/ToggleProcessamento";
import CaixaTexto from "./Components/CaixaTexto";
import ButtonFinalizar from "./Components/Button_Finalizar";
import CancelarUpload from "./Components/CancelarUpload";
import PularGCP from "./Components/Modal_pular_GCP";
import DropDownButton from "./Components/Drop_down_button";
import Menu from "./Components/Usage_Menu";
import Card from "./Components/Card";
import ModalResCar from "./Components/ModalResumirCarregamento";
import Tabs from "./Components/Tabs";
import Input from "./AuthComponents/Input";
import BotaoEntrar from "./AuthComponents/BotaoEntrar";
import LembreMeCheckbox from "./AuthComponents/LembreMeCheckbox";
import Password from "./AuthComponents/Password";

import "./assets/css/app.css";
// import "./assets/css/fonts.css";

import Typography from "./Components/Typography";
import CircularProgress from "./Components/CircularProgress";
import useHover from "./hooks/useHover";

const engine = new Styletron();

const Wrapper = styled("div", ({ $theme }) => {
  return {
    backgroundColor: $theme.colors.backgroundPrimary,
    height: "100%",
    minHeight: "100%"
  };
});

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [hoverRef, isHover] = useHover();
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={darkMode ? DarkTheme : LightTheme}>
        <Wrapper>
          <Checkbox
            checked={darkMode}
            onChange={e => setDarkMode((e.target as HTMLInputElement).checked)}
            labelPlacement={LABEL_PLACEMENT.right}
          >
            Dark Mode
          </Checkbox>
          <hr />
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={progress}
            onChange={e => setProgress(parseInt(e.target.value, 10))}
          />
          <br />
          <br />
          <br />
          <br />

          <div
            ref={hoverRef}
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#AAAAAA",
              paddingLeft: "10px"
            }}
          >
            DIV OUTER
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "#FFFFFF"
              }}
            >
              DIV INNER
            </div>
          </div>
          <br />
          <br />
          <br />
          <Input />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Password />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LembreMeCheckbox />
          <br />
          <br />
          <br />
          <br />
          <br />
          <BotaoEntrar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <DropDownButton />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Tabs />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CircularProgress progress={progress} size={32} strokeWidth={2} />
          <CircularProgress progress={progress} size={32} strokeWidth={2} />
          <CircularProgress progress={progress} size={32} strokeWidth={2} />
          <Menu progress={progress} />
          <Menu progress={progress} />
          <Menu progress={progress} />
          <Menu progress={progress} />
          <Menu progress={progress} />
          <Menu progress={progress} />
          <Menu progress={progress} />
          <Menu progress={progress} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ModalResCar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <SelectComponent />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ToolTip />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <FileUploader />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <NumberedSteps />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ProgressBar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ButtonValidacaoImagens />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Radio />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <SistemaCoordenadas />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ButtonValidacaoGCPs />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <NomeProcessamento />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <DataProcessamento />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ToggleProcessamento />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CaixaTexto />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ButtonFinalizar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CancelarUpload />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <PularGCP />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Wrapper>
      </BaseProvider>
    </StyletronProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
