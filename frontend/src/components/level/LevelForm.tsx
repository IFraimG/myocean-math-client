import { useEffect, useState } from "react"
import React from "react"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { LevelFormTypes } from "../../core/store/interfaces/level";

const LevelForm: React.FC<LevelFormTypes> = ({ answers, truthy, sendAnswer }) => {
  const [formData, setForm] = useState<Array<string>>([]);

  const updateForm = () => setForm([...answers, truthy].sort(() => Math.random() - 0.5))
  
  useEffect(() => {
    updateForm()
  }, [])

  useEffect(() => {
    updateForm()
  }, [truthy])

  return (
    <FormControl component="fieldset">
    <FormLabel component="legend">Выберите верный вариант ответа:</FormLabel>
    <RadioGroup onChange={(event: any) => sendAnswer(event.target.value)}>
      {formData.map((item: string, index: number) => {
        return <FormControlLabel value={item} key={item} control={<Radio color="primary" />} label={item} />
      })}
    </RadioGroup>
  </FormControl>
  )
}

export default LevelForm