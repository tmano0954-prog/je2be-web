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
}
