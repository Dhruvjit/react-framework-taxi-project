class UtilMaths {
  calculateMeanCoordinates(values) {
    let meanX = 0;
    let meanY = 0;

    values.forEach(({ coordinates }) => {
      meanX += coordinates[0];
      meanY += coordinates[1];
    });

    meanX = meanX / values.length;
    meanY = meanY / values.length;

    return [meanX, meanY];
  }
}

export const utilMaths = new UtilMaths();
