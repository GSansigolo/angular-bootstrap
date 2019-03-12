# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 Gabriel Sansigolo.
#
# Open Data Plataform is free software; you can redistribute it and/or modify
# it under the terms of the MIT License; see LICENSE file for more details.


"""Open Data Plataform developed using Vue.js with Node.js with Invenio framework. A web application to share and cite research data."""

from __future__ import absolute_import, print_function

from .ext import OpenDataPlataform
from .version import __version__

__all__ = ('__version__', 'OpenDataPlataform')
