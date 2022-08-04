/// <reference types="react-scripts" />

export {};

type eventNames = "ready" | "trayMenuItemClicked" | "windowClose" | "windowFocus" | "windowBlur" | "serverOffline" | "clientConnect" | "clientDisconnect" | "clientDisconnect" | "appClientDisconnect" | "extClientConnect" | "extClientDisconnect" | "extensionReady" | "spawnedProcess";
type pathValid = "config" | "data" | "cache" | "documents" | "pictures" | "music" | "video" | "downloads" | "savedGames1" | "savedGames2";
type choices = "OK" | "OK_CANCEL" | "YES_NO" | "YES_NO_CANCEL" | "RETRY_CANCEL" | "ABORT_RETRY_IGNORE";
type icons = "INFO" | "WARNING" | "ERROR" | "QUESTION";
type optionsType = {
  multiSelections: any,
  defaultPath: string,
  filters: [{name: string, extensions: [] }]
}

interface option {
  size: {
    width?: number,
    height?: number,
    minWidth?: number,
    minHeight?: number,
    maxWidth?: number,
    maxHeight?: number,
    resizable?: boolean
  };
  windowOptions: {
    title?: string,
    icon?: string,
    fullScreen?: boolean,
    alwaysOnTop?: boolean,
    enableInspector?: boolean,
    borderless?: boolean,
    maximize?: boolean,
    hidden?: boolean,
    maximizable?: boolean,
    exitProcessOnClose?: boolean,
    processArgs?: string
  }
}

declare global {
  interface Window {
    Neutralino: {
        init: any,
        app: {
          exit: (Id?: number) => Promise<string>,
          killProcess: () => Promise<PromiseLike>,
          restartProcess: (args?: Object <any>) => Promise<string, Object>,
          getConfig: () => Promise<PromiseLike>,
          broadcast: (eventName: string, data: any) => Promise<string, any>
        },
        clipboard: {
          writeText: (msg: string) => Promise<string>,
          readText: () => Promise<PromiseLike>,
        },
        computer: {
          getMemoryInfo: () => {
            physical: {
              total: number,
              available: number
            },
            virtual: {
              total: number,
              available: number
            }
          },
          getArch: () => Promise <PromiseLike>,
          getKernelInfo: () => {
            variant: string,
            version: string
          },
          getOSInfo: () => {
            name: string,
            description: string,
            version: string
          },
          getCPUInfo: () => {
            vendor: string,
            model: string,
            frequency: number,
            architecture: string,
            logicalThreads: number,
            physicalCores: number,
            physicalUnits: number
          },
          getDisplays: () => {
            id: number,
            resolution: {
              width: number,
              height: number
            },
            dpi: number,
            bpp: number,
            refreshRate: number
          }
        },
        debug: {
          log: (...args: any) => Promise <PromiseLike>
        },
        events: {
          on: (eventName: eventNames, cb: (...args?: any) => void) => Promise <PromiseLike>,
          off: (eventName: eventNames, cb: (...args?: any) => void) => Promise <PromiseLike>,
          dispatch: (eventName: string, data?: Object <any> ) => Promise <PromiseLike>,
          broadcast: (eventName: string, data?: Object <any> ) => Promise <PromiseLike>
        },
        extensions: {
          dispatch: (extensionId: string, eventName: string, data?: Object <any> ) => Promise <PromiseLike>,
          broadcast: (eventName: string, data?: Object <any> ) => Promise <PromiseLike>
          getStats: () => Promise <PromiseLike>
        },
        filesystem: {
          createDirectory: (dir: string) => Promise <PromiseLike>,
          removeDirectory: (dir: string) => Promise <PromiseLike>,
          writeFile: (dir: string, data: string) => Promise <PromiseLike>,
          appendFile: (dir: string, data: string) => Promise <PromiseLike>,
          writeBinary: (dir: string, data: ArrayBuffer) => Promise <PromiseLike>,
          writeBinaryFile: (dir: string, data: ArrayBuffer) => Promise <PromiseLike>,
          readFile: (dir: string) => Promise <PromiseLike>,
          readBinaryFile: (dir: string | Object) => Promise <PromiseLike>,
          removeFile: (dir: string) => Promise <PromiseLike>,
          copyFile: (dir: string, destination: string) => Promise <PromiseLike>,
          moveFile: (dir: string, destination: string) => Promise <PromiseLike>,
          getStats: (dir: string) => {
            size: number,
            isFile: boolean,
            isDirectory: boolean,
            createdAt: number,
            modifiedAt: number
          }
        },
        os: {
          execCommand: (command: string, options?: "background" | "stIn" ) => {
            pid: number,
            stdOut: string,
            stdErr: string,
            exitCode: number
          },
          spawnProcess: (command: string) => {
            id: number,
            pid: number
          },
          updateSpawnedProcess: (id: number, action: "stdIn" | "stdInEnd" | "exit", data?: string) => Promise <PromiseLike>,
          getSpawnedProcesses: () => Array <{}>,
          getEnv: (key: string) => Promise <PromiseLike>,
          showOpenDialog: (title: string, options: optionsType) => Promise <PromiseLike>,
          showSaveDialog: (title: string, options: optionsType) => Promise <PromiseLike>,
          showFolderDialog: (title: string, options?: { defaultPath: string }) => Promise <PromiseLike>,
          showNotification: (title: string, content: string, icon: icons) => Promise <PromiseLike>,
          showMessageBox: (title: string, content: string, choice?: choices, icon?: icons) => Promise <PromiseLike>,
          setTray: (data: { icon: string, menuItems: [{ id: string, text?: string }] }) => Promise <PromiseLike>,
          getPath: (name: pathValid) => undefined,
          open: (url: string) => undefined
        },
        storage: {
          setData: (key: string, data: string) => undefined,
          getData: (key: string) => void
        },
        updater: {
          checkForUpdates: (url: string) => {
            version: string
          },
          install: () => undefined
        },
        window: {
          setTitle: (title: string) => undefined,
          getTitle: () => string,
          minimize: () => undefined,
          maximize: () => undefined,
          unmaximize: () => undefined,
          isMaximized: () => boolean,
          setFullScreen: () => boolean,
          exitFullScreen: () => undefined,
          show: () => undefined,
          hide: () => undefined,
          isVisible: () => boolean,
          focus: () => undefined,
          setAlwaysOnTop: (type: boolean) => undefined,
          move: (x: number, y: number) => undefined,
          setIcon: (dir: string) => undefined,
          setDraggableRegion: (domId: string | HTMLElement) => undefined,
          unsetDraggableRegion: (domId: string | HTMLElement) => undefined,
          setSize: (size: option ['size']) => undefined
          getSize: () => option ['size'],
          getPosition: () => {x: number, y:number},
          create: (url: string, windowOption?: option ['windowOptions']) =>  {
            pid: number,
            stdOut: string,
            stdErr: string,
            exitCode: number
          }
        }
    },
    NL_OS: string
    NL_APPID: string
    NL_APPVERSION: string
    NL_PORT: string
    NL_MODE: string
    NL_VERSION: string
    NL_CVERSION: string
    NL_CWD: string
    NL_PATH: string
    NL_ARGS: string
    NL_PID: string
    NL_RESMODE: string
    NL_EXTENABLED: string
    NL_COMMIT: string
    NL_CCOMMIT: string
  }
}


