import { Module } from '@cmmv/core';

import { DocsController } from './docs.controler';
import { DocsService } from './docs.service';

export let DocsModule = new Module('docs', {
    controllers: [DocsController],
    providers: [DocsService],
});
