import path from 'path'
import fs from 'fs'

import withPlugins from 'next-compose-plugins'
import css from '@zeit/next-css'
import less from '@zeit/next-less'
import lessToJS from 'less-vars-to-js'

import progressBar from 'next-progressbar'
import nextConfig from './next.base.config'


export default withPlugins([
    progressBar,
    css,
    [less, lessConfig],
], nextConfig)