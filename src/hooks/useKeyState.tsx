export const useKeyState = (
  onKeyDown?: (e: any) => void,
  onKeyUp?: (e: any) => void
) => {
  window.onkeydown = (e) => {
    onKeyDown && onKeyDown(e);
  };
  window.onkeyup = (e) => {
    onKeyUp && onKeyUp(e);
  };
};
