import { OPACITY } from "@/features/editor/constants";
import { fabric } from "fabric";
import { RGBColor } from "react-color";

export function isTextType(type: string | undefined) {
  return type === "text" || type === "i-text" || type === "textbox";
}

export function rgbaObjectToString(color: RGBColor | "transparent") {
  if (color === "transparent") {
    return `rgba(0, 0, 0, 0)`;
  }
  const alpha = color.a ?? OPACITY;

  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

export const generateFilter = (filter: string) => {
  let effect;
  switch (filter) {
    case "mono":
      effect = new fabric.Image.filters.Grayscale();
      break;
    case "Polaroid":
      // @ts-ignore
      effect = new fabric.Image.filters.Polaroid();
      break;
    case "technicolor":
      // @ts-ignore
      effect = new fabric.Image.filters.Technicolor();
      break;
    case "sepia":
      effect = new fabric.Image.filters.Sepia();
      break;
    case "kodachrome":
      // @ts-ignore
      effect = new fabric.Image.filters.Kodachrome();
      break;
    case "brightness":
      effect = new fabric.Image.filters.Brightness({ brightness: 0.4 });
      break;
    case "contrast":
      effect = new fabric.Image.filters.Contrast({ contrast: 0.4 });
      break;
    case "brownie":
      // @ts-ignore
      effect = new fabric.Image.filters.Brownie();
      break;
    case "vintage":
      // @ts-ignore
      effect = new fabric.Image.filters.Vintage();
      break;
    case "pixelate":
      effect = new fabric.Image.filters.Pixelate({ blocksize: 4 });
      break;
    case "blur":
      effect = new fabric.Image.filters.Blur({ blur: 0.5 });
      break;
    case "sharpen":
      effect = new fabric.Image.filters.Convolute({
        matrix: [0, -1, 0, -1, 5, -1, 0, -1, 0],
      });
      break;
    case "emboss":
      effect = new fabric.Image.filters.Convolute({
        matrix: [1, 1, 1, 1, 0.7, -1, -1, -1, -1],
      });
      break;
    case "sharpen":
      effect = new fabric.Image.filters.Convolute({
        matrix: [0, -1, 0, -1, 5, -1, 0, -1, 0],
      });
      break;
    case "invert":
      effect = new fabric.Image.filters.Invert();
      break;
    case "remove-color":
      // @ts-ignore
      effect = new fabric.Image.filters.RemoveColor({
        distance: 0.6,
        threshold: 0.2,
      });
      break;
    // case "gamma":
    //   // @ts-ignore
    //   effect = new fabric.Image.filters.Gamma({
    //     gamma: 0.5,
    //   });
    //   break;
    case "blacknwhite":
      // @ts-ignore
      effect = new fabric.Image.filters.BlackWhite();
      break;
    case "blend-color":
      effect = new fabric.Image.filters.BlendColor({
        color: "#f55",
        mode: "multiply",
      });
      break;
    case "vibrance":
      // @ts-ignore
      effect = new fabric.Image.filters.Vibrance({
        vibrance: 1,
      });
      break;
    case "huerotate":
      effect = new fabric.Image.filters.HueRotation({
        rotation: 0.5,
      });
      break;
    case "noise":
      effect = new fabric.Image.filters.Noise();
      break;
    // case "gradient-transparency":
    //   effect = new fabric.Image.filters.GradientTransparency({
    //     threshold: 0.2,
    //   });
    //   break;
    case "resize":
      effect = new fabric.Image.filters.Resize({
        resizeType: "hermite",
        scaleX: 0.5,
        scaleY: 0.5,
      });
      break;
    default:
      effect = null;
      return;
  }

  return effect;
};
