import Log from '../models/log';

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