import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { type AxiosResponse } from 'axios';
import { type User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage/localStorage';

export interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, { dispatch, rejectWithValue }) => {
    try {
      const response: AxiosResponse<User> = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.debug(error);
      return rejectWithValue('error');
    }
  }
);
