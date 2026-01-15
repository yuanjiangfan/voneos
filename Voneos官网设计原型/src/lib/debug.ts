const isDev = import.meta.env.DEV;

/**
 * 开发环境调试日志
 * 仅在开发环境输出日志，生产环境自动禁用
 */
export function debugLog(message: string, data?: any) {
    if (isDev) {
        if (data !== undefined) {
            console.log(message, data);
        } else {
            console.log(message);
        }
    }
}
