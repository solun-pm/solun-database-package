import Log from '../models/log';
import ApiLog from '../models/api_logs';

export function birdLog(name: string, err: any, type: string) {
    const validTypes = ['error', 'warning', 'info'];
    if (!validTypes.includes(type)) {
        throw new Error('Invalid type');
    }
    const log = new Log({
        log_name: name,
        log_message: err,
        type: type,
    });
    log.save();
}

export function birdApiLog(method: string, status: number, url: string, ms: number, remoteAddress: string, referrer: string, userAgent: string) {
    const apiLog = new ApiLog({
        method: method,
        status: status,
        url: url,
        ms: ms.toFixed(0),
        remoteAddress: remoteAddress,
        referrer: referrer,
        userAgent: userAgent,
    });
    apiLog.save();
}