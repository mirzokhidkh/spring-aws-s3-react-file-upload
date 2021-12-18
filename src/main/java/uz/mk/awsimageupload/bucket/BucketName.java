package uz.mk.awsimageupload.bucket;

public enum BucketName {
    PROFILE_NAME("image-upload-mk");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
