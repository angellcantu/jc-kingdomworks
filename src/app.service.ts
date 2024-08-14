'use strict';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

	getHello(): string {
		return 'Hello World!';
	}

	getJSON(): { success: boolean, message: string } {
		return {
			success: true,
			message: 'Hello!!'
		};
	}

}