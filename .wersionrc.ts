import { WersionConfigModel, semverMatcher } from "@weichwarenprojekt/wersion";

export const configuration: Partial<WersionConfigModel> = {
  versionFile: {
      path: `./package.json`,
      matcher: `"version": ?"${semverMatcher}"`
  },
  commitTypes: {
      major: [],
      minor: ["feat"],
      patch: ["fix"]
  },
  breakingChangeTrigger: "breaking change",
  changelogFilePath: "./CHANGELOG.md",
  projectName: "react-async-effect"
};