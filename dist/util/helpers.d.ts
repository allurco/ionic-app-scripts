import { BuildError } from './errors';
import { BuildContext, DeepLinkConfigEntry, File, WebpackStats } from './interfaces';
export declare function getAppScriptsPackageJson(): any;
export declare function getAppScriptsVersion(): string;
export declare function getSystemText(userRootDir: string): string[];
export declare function getSystemData(userRootDir: string): {
    ionicAppScripts: string;
    ionicFramework: string;
    ionicNative: string;
    angularCore: string;
    angularCompilerCli: string;
    node: string;
    osName: any;
};
export declare function splitLineBreaks(sourceText: string): string[];
export declare const objectAssign: {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
};
export declare function titleCase(str: string): string;
export declare function writeFileAsync(filePath: string, content: string): Promise<{}>;
export declare function readFileAsync(filePath: string): Promise<string>;
export declare function readAndCacheFile(filePath: string, purge?: boolean): Promise<string>;
export declare function unlinkAsync(filePath: string | string[]): Promise<any>;
export declare function rimRafAsync(directoryPath: string): Promise<void>;
export declare function copyFileAsync(srcPath: string, destPath: string): Promise<void>;
export declare function mkDirpAsync(directoryPath: string): Promise<{}>;
export declare function readDirAsync(pathToDir: string): Promise<string[]>;
export declare function createFileObject(filePath: string): File;
export declare function setContext(context: BuildContext): void;
export declare function getContext(): BuildContext;
export declare function setParsedDeepLinkConfig(parsedDeepLinkConfig: DeepLinkConfigEntry[]): void;
export declare function getParsedDeepLinkConfig(): DeepLinkConfigEntry[];
export declare function transformSrcPathToTmpPath(originalPath: string, context: BuildContext): string;
export declare function transformTmpPathToSrcPath(originalPath: string, context: BuildContext): string;
export declare function changeExtension(filePath: string, newExtension: string): string;
export declare function escapeHtml(unsafe: string): string;
export declare function escapeStringForRegex(input: string): string;
export declare function rangeReplace(source: string, startIndex: number, endIndex: number, newContent: string): string;
export declare function stringSplice(source: string, startIndex: number, numToDelete: number, newContent: string): string;
export declare function toUnixPath(filePath: string): string;
export declare function generateRandomHexString(numCharacters: number): string;
export declare function getStringPropertyValue(propertyName: string): string;
export declare function getIntPropertyValue(propertyName: string): number;
export declare function getBooleanPropertyValue(propertyName: string): boolean;
export declare function convertFilePathToNgFactoryPath(filePath: string): string;
export declare function printDependencyMap(map: Map<string, Set<string>>): void;
export declare function webpackStatsToDependencyMap(context: BuildContext, stats: any): Map<string, Set<string>>;
export declare function processStatsImpl(webpackStats: WebpackStats): Map<string, Set<string>>;
export declare function purgeWebpackPrefixFromPath(filePath: string): string;
export declare function replaceAll(input: string, toReplace: string, replacement: string): string;
export declare function ensureSuffix(input: string, suffix: string): string;
export declare function removeSuffix(input: string, suffix: string): string;
export declare function buildErrorToJson(buildError: BuildError): {
    message: string;
    name: string;
    stack: string;
    hasBeenLogged: boolean;
    isFatal: boolean;
};
export declare function jsonToBuildError(nonTypedBuildError: any): BuildError;
export declare function upperCaseFirst(input: string): string;
export declare function sentenceCase(input: string): string;
export declare function camelCase(input: string): string;
export declare function paramCase(input: string): string;
export declare function pascalCase(input: string): string;
export declare function removeCaseFromString(input: string, inReplacement?: string): string;
export declare function isSrcOrIonicOrIonicDeps(filePath: string): boolean;
export declare function isIonicOrAngular(filePath: string): boolean;
export declare function isIonic(filePath: string): boolean;
