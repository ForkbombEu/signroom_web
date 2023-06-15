// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2023 Dyne.org foundation <foundation@dyne.org>.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

module.exports = {
  apps: [
    {
      name: "signroom",
      script: "build/index.js",
      env: {
        PORT: 4173,
      },
    },
  ],
  deploy: {
    baloo: {
      host: "baloo",
      ref: "origin/main",
      repo: "https://github.com/forkbombeu/signroom_web",
      path: "/root/signroom_web",
      "pre-deploy": "git submodule update --init --recursive",
      "post-deploy": "cd webapp && pnpm install && pnpm types && pnpm build && pnpm reload",
      env: {
        NODE_ENV: "production",
      },
    },
  },
};