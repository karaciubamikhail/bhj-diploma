/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    let url = options.url;
    const formData = new FormData();

    if (options.data) {
        if (options.method === 'GET') {
            url += '?' + Object.entries(options.data).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
        } else {
            Object.entries(options.data).forEach(item => formData.append(...item));
        }
    }

    xhr.load = () => {
                const r = xhr.response;
                if (r && r.success) {
                    response = r;
                } else {
                    err = r;
                }
            }
            options.callback(err, response)
        };
    };

    xhr.open(options.method, url);
    xhr.send(formData);
};
