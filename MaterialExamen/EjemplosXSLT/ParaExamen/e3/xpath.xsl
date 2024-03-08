<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
    <style>
        .row1{
            background-color: rgb(65, 208, 47)
        }

        .row0{
            background-color: rgb(174, 255, 0)
        }

        .row2{
            background-color: rgb(208, 47, 154)
        }
    </style>


  <body>
    <h2>Food</h2>
    <table>
      <tr class="row0">
        <th>Food item</th>
        <th>Carbs (g)</th>
        <th>Fiber (g)</th>
        <th>Fat (g)</th>
        <th>Energy (kj)</th>
        
      </tr>

      <xsl:for-each select="//food_item[@type='vegetable']">
      <tr class="row1">
        <td><xsl:value-of select="name"/></td>
        <td><xsl:value-of select="carbs_per_serving"/></td>
        <td><xsl:value-of select="fiber_per_serving"/></td>
        <td><xsl:value-of select="fat_per_serving"/></td>
        <td><xsl:value-of select="kj_per_serving"/></td>
      </tr>
    </xsl:for-each>

    <xsl:for-each select="//food_item[@type='fruit']">
    <tr class="row2">
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="carbs_per_serving"/></td>
      <td><xsl:value-of select="fiber_per_serving"/></td>
      <td><xsl:value-of select="fat_per_serving"/></td>
      <td><xsl:value-of select="kj_per_serving"/></td>
    </tr>
  </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>