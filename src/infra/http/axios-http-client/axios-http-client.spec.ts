import { faker } from '@faker-js/faker';
import axios from 'axios';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

describe('AxiosHttpClient', () => {
  test('should call axios correct URL', async () => {
    const url = faker.internet.url();
    const sut = makeSut();
    await sut.post({ url });
    expect(mockedAxios).toHaveBeenCalledWith(url);
  });
});
