module Main where

import Untagged.Coercible (coerce)
import Literals (stringLit, StringLit)
import Literals.Undefined (Undefined, undefined)
import Untagged.Union (asOneOf, type (|+|))

type Opts =
  { backdrop :: Undefined |+| StringLit "static" |+| Boolean
  , keyboard :: Boolean
  }

opts1 :: Opts
opts1 = coerce { keyboard: true }

-- | This is a plain string "static" already - no more transformations
-- | This value can be also reused in a different untagged union types
static = stringLit :: StringLit "static"

opts2 :: Opts
opts2 = { keyboard: true, backdrop: asOneOf static }

opts3 :: Opts
opts3 = { keyboard: true, backdrop: asOneOf undefined }
