import { useState, useEffect } from 'react';
import { InputLabel, FormControl, MenuItem } from '@mui/material';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('english');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    void i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    void i18n.changeLanguage('english');
  }, []);

  return (
    <FormControl
      variant='standard'
      sx={{
        m: 1,
        position: 'fixed',
        top: 10,
        left: 10,
        minWidth: 120,
        maxWidth: 120,
      }}
    >
      <InputLabel id='demo-simple-select-standard-label' sx={{ color: 'white' }}>
        Language
      </InputLabel>
      <Select
        labelId='demo-simple-select-standard-label'
        id='demo-simple-select-standard'
        value={language}
        onChange={handleChange}
        label='Age'
        sx={{ color: 'white' }}
      >
        <MenuItem value='english'>English</MenuItem>
        <MenuItem value='spanish'>Inglesa</MenuItem>
      </Select>
    </FormControl>
  );
};
