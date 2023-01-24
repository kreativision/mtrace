import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import axios from "../../config/axios";
import { userEndpoints } from "../../constants/endpoints";
import { User } from "../../types/user";

// Declare types:
type RegisterResponse = Promise<AxiosResponse<{ message: string }, any>>;

// Put all API functions below

const registerUser = (payload: User): RegisterResponse => {
  return axios.post(userEndpoints.SIGN_UP, payload);
};

// Put all react-query wrappers below

export function useRegisterUser(
  options: Omit<
    UseMutationOptions<AxiosResponse<any, any>, unknown, User, unknown>,
    "mutationFn"
  >
): UseMutationResult<AxiosResponse<any, any>, unknown, User, unknown> {
  return useMutation(registerUser, options);
}
