import { UnavailabilityError } from 'expo-modules-core';
import ExpoFaceDetector from './ExpoFaceDetector';
// @docsMissing
export var FaceDetectorMode;
(function (FaceDetectorMode) {
    FaceDetectorMode["fast"] = "fast";
    FaceDetectorMode["accurate"] = "accurate";
})(FaceDetectorMode || (FaceDetectorMode = {}));
// @docsMissing
export var FaceDetectorLandmarks;
(function (FaceDetectorLandmarks) {
    FaceDetectorLandmarks["all"] = "all";
    FaceDetectorLandmarks["none"] = "none";
})(FaceDetectorLandmarks || (FaceDetectorLandmarks = {}));
// @docsMissing
export var FaceDetectorClassifications;
(function (FaceDetectorClassifications) {
    FaceDetectorClassifications["all"] = "all";
    FaceDetectorClassifications["none"] = "none";
})(FaceDetectorClassifications || (FaceDetectorClassifications = {}));
// @needsAudit
/**
 * Detect faces on a picture.
 * @param uri `file://` URI to the image.
 * @param options A map of detection options.
 * @return Returns a Promise which fulfils with [`DetectionResult`](#detectionresult) object.
 */
export async function detectFacesAsync(uri, options = {}) {
    if (!ExpoFaceDetector.detectFaces) {
        throw new UnavailabilityError('expo-face-detector', 'detectFaces');
    }
    return await ExpoFaceDetector.detectFaces({ ...options, uri });
}
//# sourceMappingURL=FaceDetector.js.map