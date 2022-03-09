import {EmotionModel} from "./emotion.model";

export interface RecordModel {
  userName?: string;
  date: string;
  situation: string;
  thought: string;
  emotions: EmotionModel[];
}
