import {EmotionModel} from "./emotion.model";

export interface RecordModel {
  userName?: string;
  date: string;
  situation: string;
  situationId: number;
  situationNoteId: number;
  thought: string;
  thoughtId: number;
  thoughtNoteId: number;
  emotions: EmotionModel[];
  id: number;
}
