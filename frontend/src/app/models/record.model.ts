import {EmotionModel} from "./emotion.model";

export interface RecordModel {
  id?: string;
  date: string;
  situation: string;
  thought: string;
  emotions: EmotionModel[]
}
