import { IFileStorageService } from "@domain/services/file-storage-service.interface";
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";

export class S3FileStorageService implements IFileStorageService {
    private _s3Client: S3Client;
    private bucketName: string;
    constructor() {
        this._s3Client = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            },
        });
        this.bucketName = process.env.AWS_BUCKET_NAME!;
    }

    async uploadFile({ key, buffer, mimeType }: { key: string; buffer: Buffer; mimeType: string }): Promise<string> {
        await this._s3Client.send(new PutObjectCommand({
            Bucket: this.bucketName,
            Key: key,
            Body: buffer,
            ContentType: mimeType,
        }));

        return `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    }

    async readFile(fileId: string): Promise<Buffer> {
        const command = new GetObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME!,
            Key: fileId,
        });

        const { Body } = await this._s3Client.send(command);

        const chunks: Uint8Array[] = [];
        for await (const chunk of Body as Readable) {
            chunks.push(chunk as Uint8Array);
        }

        return Buffer.concat(chunks);
    }
}