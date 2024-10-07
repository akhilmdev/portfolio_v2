import CodeEditor from "../CodeEditor/codeEditor";
import CodeRunner from "../CodeRunner/codeRunner";
import { ContentsWrapper } from "./contents.style";

const Contents: React.FC = () => {
  return (
    <ContentsWrapper>
      <CodeEditor></CodeEditor>
      <CodeRunner></CodeRunner>
    </ContentsWrapper>
  );
};

export default Contents;
