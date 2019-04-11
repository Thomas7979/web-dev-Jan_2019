import { Component } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .clOnline {
            color: orange;
        }
    `]
})

export class ServerComponent {
    serverId: number = 17;
    serverStat: string = 'offline';

    constructor() {
        this.serverStat = Math.random () > 0.5 ? 'online' : 'offline';
    }

    getServerStat() {
        return this.serverStat;
    }

    getColor() {
        return this.serverStat === 'online' ? 'lightgreen' : 'orange';
    }
}