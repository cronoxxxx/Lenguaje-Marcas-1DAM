<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <style>
          div {
            background-color: peru;
          }
        </style>
      </head>
      <body>
        <h2>My Student Collection</h2>
        <div>
          <xsl:for-each select="class/student">
            <p>
              <strong>First Name: </strong><xsl:value-of select="firstname" />
              <br />
              <strong>Last Name: </strong><xsl:value-of select="lastname" />
              <br />
              <strong>Nickname: </strong><xsl:value-of select="nickname" />
              <br />
              <strong>Marks: </strong><xsl:value-of select="marks" />
            </p>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
