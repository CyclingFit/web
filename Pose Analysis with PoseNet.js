import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';

async function analyzePose(image) {
  const net = await posenet.load();
  const poses = await net.estimateSinglePose(image);
  return poses;
}

export default analyzePose;

