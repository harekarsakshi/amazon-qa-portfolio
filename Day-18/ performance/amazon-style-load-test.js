import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 200,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    },
};

export default function () {
    http.get('https://fakestoreapi.com/products');
    sleep(1);
}
