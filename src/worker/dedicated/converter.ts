  const inputPtr = StringToUTF8(inputPath);
  const outputPtr = StringToUTF8(`/je2be/${id}/out`);
  const idPtr = StringToUTF8(id);
  let errorJsonPtr: number = 0;
  switch (mode) {
    case "j2b":
      errorJsonPtr = Module._JavaToBedrock(inputPtr, outputPtr, idPtr);
      break;
    case "b2j":
      errorJsonPtr = Module._BedrockToJava(inputPtr, outputPtr, idPtr);
      break;
    case "x2j":
      errorJsonPtr = Module._Xbox360ToJava(inputPtr, outputPtr, idPtr);
      break;
    case "x2b":
      errorJsonPtr = Module._Xbox360ToBedrock(inputPtr, outputPtr, idPtr);
      break;
    case "p2b":
      errorJsonPtr = Module._PS3ToBedrock(inputPtr, outputPtr, idPtr);
      break;
    case "p2j":
      errorJsonPtr = Module._PS3ToJava(inputPtr, outputPtr, idPtr);
      break;
    case "j2x":
      errorJsonPtr = Module._JavaToXbox360(inputPtr, outputPtr, idPtr);
      break;
    case "b2x":
      errorJsonPtr = Module._BedrockToXbox360(inputPtr, outputPtr, idPtr);
      break;
    case "j2p":
      errorJsonPtr = Module._JavaToPS3(inputPtr, outputPtr, idPtr);
      break;
    case "b2p":
      errorJsonPtr = Module._BedrockToPS3(inputPtr, outputPtr, idPtr);
      break;
        }
