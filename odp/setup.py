# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 Gabriel Sansigolo.
#
# Open Data Plataform is free software; you can redistribute it and/or modify
# it under the terms of the MIT License; see LICENSE file for more details.

"""Open Data Plataform developed using Vue.js with Node.js with Invenio framework. A web application to share and cite research data."""

import os

from setuptools import find_packages, setup

readme = open('README.rst').read()

packages = find_packages()

# Get the version string. Cannot be done with import!
g = {}
with open(os.path.join('odp', 'version.py'), 'rt') as fp:
    exec(fp.read(), g)
    version = g['__version__']

setup(
    name='odp',
    version=version,
    description=__doc__,
    long_description=readme,
    keywords='odp Invenio',
    license='MIT',
    author='Gabriel Sansigolo',
    author_email='gabrielsansigolo@gmail.com',
    url='https://github.com/Open-Data-Plataform',
    packages=packages,
    zip_safe=False,
    include_package_data=True,
    platforms='any',
    entry_points={
        'console_scripts': [
            'odp = invenio_app.cli:cli',
        ],
        'invenio_base.apps': [
            'odp_records = odp.records:OpenDataPlataform',
        ],
        'invenio_base.blueprints': [
            'odp = odp.theme.views:blueprint',
            'odp_records = odp.records.views:blueprint',
        ],
        'invenio_config.module': [
            'odp = odp.config',
        ],
        'invenio_i18n.translations': [
            'messages = odp',
        ],
        'invenio_base.api_apps': [
            'odp = odp.records:OpenDataPlataform',
         ],
        'invenio_jsonschemas.schemas': [
            'odp = odp.records.jsonschemas'
        ],
        'invenio_search.mappings': [
            'records = odp.records.mappings'
        ],
    },
    classifiers=[
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Development Status :: 3 - Alpha',
    ],
)
