package uz.mk.awsimageupload.datastore;

import org.springframework.stereotype.Repository;
import uz.mk.awsimageupload.profile.UserProfile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {
    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("e1559f65-f366-4121-bab8-0af41b64d4c7"), "janetjones", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("41763f7f-536e-48f7-8a57-ae7cf8d5c937"), "antoniojunior", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
