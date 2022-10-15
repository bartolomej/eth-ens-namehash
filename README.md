# Eth ENS Namehash (Fork)

Modified version of [eth-ens-namehash](https://github.com/Arachnid/eth-ens-namehash) lib, used for hashing ENS names (from non-normalized name to ENS node hash).

For more info on ENS name processing, see: https://docs.ens.domains/contract-api-reference/name-processing.

This lib was adapted for usage in BigQuery.

## Usage

```html
<script src="./dist/index.js"></script>
<script>
    console.log(namehash.hash("hahaboy"))
</script>
```