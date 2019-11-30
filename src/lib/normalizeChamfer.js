export default function normalizeChamfer(chamfer) {
    if (!Array.isArray(chamfer)) {
        return [ chamfer, chamfer, chamfer, chamfer ];
    }

    if (chamfer.length === 4) {
        return chamfer;
    }

    switch(chamfer.length) {
        case 1:
            return (new Array(4)).fill(chamfer[0]);
            break;
        case 2:
            return [ chamfer[0], chamfer[1], chamfer[0], chamfer[1] ];
            break;
        case 3:
            return [ chamfer[0], chamfer[1], chamfer[2], chamfer[1] ];
            break;
    }
}
