import { useContext, useState } from "react";
import { Project, CreateProject } from '../types/project'
import { ApiContext } from "../contexts/ApiContext";
import axios, { AxiosResponse } from "axios";
import useAuthContext from "./useAuthContext";

const useProject = () => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);
  const { userData } = useAuthContext()
  const api = useContext(ApiContext)!;

  const getProjects = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.get<Project, AxiosResponse>(`/project`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`
        }
      });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      } else {
        console.log(error)
      }
      setIsPending(false);
    }
  };

  const getAdminProjects = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.get<Project, AxiosResponse>(`/project/admin`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`
        }
      });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      } else {
        console.log(error)
      }
      setIsPending(false);
    }
  };

  const createProject = async ({
    name,
    features,
    image,
    technologies,
    description,
    links,
    order,
    disabled
  }: CreateProject) => {
    setError(null);
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append("name", name)
      formData.append("description", description)
      formData.append("features", features)
      formData.append("technologies", JSON.stringify(technologies))
      formData.append("links", JSON.stringify(links))
      formData.append("order", order.toString())
      formData.append("disabled", JSON.stringify(disabled))
      if (!image) {
        throw Error("Image is required!")
      }
      formData.append("image", image)
      const res = await api.post<Project>(`/project`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userData?.token}`
        }
      });
      console.log(res)
      setIsPending(false);
      return res;
    } catch (error) {
      console.log(error)
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      } else {
        console.log(error)
      }
      setIsPending(false);
    }
  };

  const updateProject = async ({
    _id,
    name,
    features,
    image,
    technologies,
    description,
    links,
    order,
    disabled
  }: CreateProject) => {
    setError(null);
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append("id", _id!)
      formData.append("name", name)
      formData.append("description", description)
      formData.append("features", features)
      formData.append("technologies", JSON.stringify(technologies))
      formData.append("links", JSON.stringify(links))
      formData.append("order", order.toString())
      formData.append("disabled", JSON.stringify(disabled))
      if (image) {
        formData.append("image", image)
      }
      const res = await api.put<Project>(`/project`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userData?.token}`
        }
      });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      } else {
        console.log(error)
      }
      setIsPending(false);
    }
  };

  const disableProject = async (id: string) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.delete<Project>(`/project/${id}`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`
        }
      });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      } else {
        console.log(error)
      }
      setIsPending(false);
    }
  };

  return { error, isPending, getProjects, createProject, updateProject, disableProject, getAdminProjects };
};

export default useProject;
