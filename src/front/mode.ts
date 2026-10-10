import {
  B2JConverterMetadata,
  ConverterMetadata,
  J2BConverterMetadata,
  P2BConverterMetadata,
  P2JConverterMetadata,
  X2BConverterMetadata,
  X2JConverterMetadata,
  J2XConverterMetadata,
  B2XConverterMetadata,
  J2PConverterMetadata,
  B2PConverterMetadata,
} from "../share/progress";
import { gettext } from "./i18n";
import { WorkerError, WorkerErrorType } from "../share/messages";

export type ConvertMode = "j2b" | "b2j" | "x2b" | "x2j" | "p2b" | "p2j" | "j2x" | "b2x" | "j2p" | "b2p";
export type Mode = "select" | ConvertMode;

export function convertModeSupportsDirectoryInput(mode: ConvertMode): boolean {
  return mode === "j2b" || mode === "b2j" || mode === "p2b" || mode === "p2j" || mode === "j2x" || mode === "b2x" || mode === "j2p" || mode === "b2p";
}

export function convertModeInputFileExtension(mode: ConvertMode): string {
  switch (mode) {
    case "j2b":
    case "p2b":
    case "p2j":
    case "j2x":
    case "b2x":
    case "j2p":
    case "b2p":
      return ".zip";
    case "b2j":
      return ".mcworld";
    case "x2j":
    case "x2b":
      return ".bin";
  }
}

export function convertModeOutputFileExtension(mode: ConvertMode): string {
  switch (mode) {
    case "j2b":
    case "x2b":
    case "p2b":
    case "b2x":
    case "b2p":
      return ".mcworld";
    case "b2j":
    case "x2j":
    case "p2j":
    case "j2x":
    case "j2p":
      return ".zip";
  }
}

export function convertModeRequiredFile(mode: ConvertMode):
  | {
      name: string;
      notFoundError: WorkerErrorType;
      tooManyError: WorkerErrorType;
    }
  | undefined {
  switch (mode) {
    case "j2b":
    case "b2j":
      return {
        name: "level.dat",
        notFoundError: "NoLevelDatFound",
        tooManyError: "2OrMoreLevelDatFound",
      };
    case "p2j":
    case "p2b":
      return {
        name: "GAMEDATA",
        notFoundError: "NoGAMEDATAFound",
        tooManyError: "2OrMoreGAMEDATAFound",
      };
    default:
      return undefined;
  }
}

export function convertModeMetadata(
  mode: ConvertMode,
  file: boolean,
): ConverterMetadata {
  switch (mode) {
    case "j2b":
      return new J2BConverterMetadata(file);
    case "b2j":
      return new B2JConverterMetadata(file);
    case "x2j":
      return new X2JConverterMetadata();
    case "x2b":
      return new X2BConverterMetadata();
    case "p2b":
      return new P2BConverterMetadata(file);
    case "p2j":
      return new P2JConverterMetadata(file);
    case "j2x":
      return new J2XConverterMetadata(file);
    case "b2x":
      return new B2XConverterMetadata(file);
    case "j2p":
      return new J2PConverterMetadata(file);
    case "b2p":
      return new B2PConverterMetadata(file);
  }
}

export function convertModeDescription(mode: ConvertMode): string {
  switch (mode) {
    case "j2b":
      return gettext("Java to Bedrock");
    case "b2j":
      return gettext("Bedrock to Java");
    case "x2j":
      return gettext("Xbox360 to Java");
    case "x2b":
      return gettext("Xbox360 to Bedrock");
    case "p2b":
      return gettext("PS3 to Bedrock");
    case "p2j":
      return gettext("PS3 to Java");
    case "j2x":
      return gettext("Java to Xbox360");
    case "b2x":
      return gettext("Bedrock to Xbox360");
    case "j2p":
      return gettext("Java to PS3");
    case "b2p":
      return gettext("Bedrock to PS3");
  }
  }
