import { Notify } from 'quasar';

const defaultValues = {
  progress: true,
  timeout: import.meta.env.VITE_RESP_TIMEOUT,
};

/**
 * A factory function that generates a response object based on the provided type, message, and position.
 *
 * @param {string} type - The type of response.
 * @param {string} message - The message content of the response.
 * @param {string} [position='bottom'] - The position where the response should be displayed.
 * @return {Object} The response object with type, message, position, and default values.
 */
const responseFactory =
  (type) =>
  (message, position = 'bottom') => ({
    type,
    message,
    position,
    ...defaultValues,
  });

const positiveResponse = responseFactory('positive');
const negativeResponse = responseFactory('negative');
const warningResponse = responseFactory('warning');
const infoResponse = responseFactory('info');
const onGoingResponse = (message, position) => ({
  type: 'ongoing',
  message,
  position,
});

/**
 * Sends a notification of the specified type with the given message and position.
 *
 * @param {string} type - The type of notification (positive, negative, warning, info, ongoing).
 * @param {string} message - The message to be displayed in the notification.
 * @param {string} [position='bottom'] - The position where the notification should appear (default: 'bottom').
 * @return {Notify} The created notification object.
 */
const sendNotification = (type, message, position = 'bottom') => {
  const responseMap = {
    positive: positiveResponse(message, position),
    negative: negativeResponse(message, position),
    warning: warningResponse(message, position),
    info: infoResponse(message, position),
    ongoing: onGoingResponse(message, position),
  };

  return Notify.create({ ...responseMap[type] });
};

export {
  sendNotification,
  positiveResponse,
  negativeResponse,
  warningResponse,
  infoResponse,
  onGoingResponse,
};
