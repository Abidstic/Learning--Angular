export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer1(id: number) {
    const server1 = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server1;
  }

  updateServer1(id: number, serverInfo: {name: string, status: string}) {
    const server1 = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server1) {
      server1.name = serverInfo.name;
      server1.status = serverInfo.status;
    }
  }
}
