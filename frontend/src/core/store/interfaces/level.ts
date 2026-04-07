
export interface stateLevelTypes {
  tasksList: Array<any>
  currentLevel: number
  currentTask: any | null
  isFinished: boolean
  isError: boolean
  errorsList: number
}

export interface LevelPageTypes {
  tasksList: Array<any>
  currentLevel: number
  currentTask: any
  isLoader: boolean,
  userID: string | null,
  isError: boolean,
  isFinished: boolean
}

export interface LevelFormTypes {
  answers: Array<string>
  truthy: string
  sendAnswer: (answer: string) => void
}