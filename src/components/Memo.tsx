import { Box, Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { formatText } from '../utils';
const initalDate = new Date().toLocaleDateString();
export const Memo = () => {
  const [date, setDate] = useState(initalDate);
  const [content, setContent] = useState('');
  const [purpose, setPurpose] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [concernedPerson, setConcernedPerson] = useState('');
  const [remarks, setRemarks] = useState('');
  const handleCopy = () => {
    const formattedText = formatText({
      date,
      content,
      purpose,
      time,
      place,
      concernedPerson,
      remarks,
    });
    navigator.clipboard
      .writeText(formattedText)
      .then(() => alert('コピー完了！'));
  };
  return (
    <Box>
      <Box fontSize={"32px"} mb="30px">メモジェネレータ</Box>
      <Stack spacing={3}>
        <TextField
          label='日付'
          onChange={(e) => setDate(e.target.value)}
          defaultValue={date}
        />
        <TextField
          label='内容'
          onChange={(e) => setContent(e.target.value)}
          defaultValue={content}
        />
        <TextField
          label='目的'
          onChange={(e) => setPurpose(e.target.value)}
          defaultValue={purpose}
        />
        <TextField
          label='日時'
          onChange={(e) => setTime(e.target.value)}
          defaultValue={time}
        />
        <TextField
          label='場所'
          onChange={(e) => setPlace(e.target.value)}
          defaultValue={place}
        />
        <TextField
          label='関係者'
          onChange={(e) => setConcernedPerson(e.target.value)}
          defaultValue={concernedPerson}
        />
        <TextField
          multiline={true}
          label='備考'
          onChange={(e) => setRemarks(e.target.value)}
          defaultValue={remarks}
        />
      </Stack>
      <Button onClick={handleCopy}>結果をコピーする</Button>
    </Box>
  );
};
