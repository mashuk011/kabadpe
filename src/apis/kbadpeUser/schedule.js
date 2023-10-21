import axios from "axios";
import { resolvePromise } from "../../lib/http";
import { getFromLocalStorage } from "../../lib/localStorage";

export const userSchedulePickup = resolvePromise(
  async ({
    appointmentAddress,
    appointmentContactNumber,
    appointmentPersonName,
    appointmentDate,
    appointmentTimeSlot,
    orderDetail,
  }) => {
    const apiUrl = ENV_API_BASE_URL + "/user/kabadPe/schedualPickup";
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      {
        appointmentAddress,
        appointmentContactNumber,
        appointmentPersonName,
        appointmentDate,
        appointmentTimeSlot,
        orderDetail,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  }
);
