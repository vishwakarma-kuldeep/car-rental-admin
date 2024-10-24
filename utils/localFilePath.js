import path from "path";
import { fileURLToPath } from "url";

const localFilePath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const _dirname = path.dirname(__filename);
  return _dirname;
};
export { localFilePath };