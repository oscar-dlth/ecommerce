export interface IFileStorageService {
    uploadFile({ key, buffer, mimeType }: { key: string; buffer: Buffer; mimeType: string }): Promise<string>;
    readFile(fileId: string): Promise<Buffer>;
}